import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { data } from './test-6'
import {
	Container, ImageProfile,
	TextName, TextEmail,
	ColProfile, RowHeader,
} from './dashboardStyle'
import { className } from 'postcss-selector-parser'

const Dashboard = () => {
	const router = useRouter()
	const [billdetails, setBilldetails] = useState([])
	const [isProfile, setProfile] = useState({
		type: '',
		name: '',
		email: '',
		imageUrl: '',
		account_id: '',
	})

	useEffect(() => {
		const bills = data.data.response.billdetails
		if (isEmpty(window.localStorage.getItem('isToken'))) {
			router.push('/login')
		} else {
			setBilldetails(bills.filter(bill => bill.body.DENOM >= 100000))
			setProfile(JSON.parse(window.localStorage.getItem('isProfile')))
		}
	}, [])

	const handleLogout = () => {
		window.localStorage.removeItem('isToken')
		window.localStorage.removeItem('isProfile')

		router.push('/')
	}

	return (
		<Container className="container-sm">
			<RowHeader className="row">
				<ColProfile className="col-11">
					<ImageProfile src={isProfile.imageUrl} alt={`${isProfile.type || 'load'}-img`}/>
					<div>
						<TextName>{isProfile.name}</TextName>
						<TextEmail>{isProfile.email}</TextEmail>
					</div>
				</ColProfile>
				<div className="col-1">
					<button className="btn btn-primary" onClick={handleLogout}>Keluar</button>
				</div>
			</RowHeader>
			<div className="row">
				{
					billdetails.map((item, idx) => (
						<p key={idx}>{`[${idx}]`}{` => `}{item.body.DENOM}</p>
					))
				}
			</div>
		</Container>
	)
}

export default Dashboard
