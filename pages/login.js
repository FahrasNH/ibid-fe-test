import styled from 'styled-components'

export default function Login() {
  return (
    <Container className="container-sm">
      <AuthCard>
				<Title>Masuk</Title>
				<div className="input-group">
					<LogoGoogle className="input-group-text" id="basic-addon1"><FaGoogle className="fab fa-google"></FaGoogle></LogoGoogle>
					<ButtonGoogle type="submit" className="btn btn-primary">Masuk dengan Google</ButtonGoogle>
				</div>
				<Divider className="hr-label">
					<span>atau</span>
				</Divider>
				<form>
					<div className="input-group mb-3">
						<input type="text" className="form-control" placeholder="Email" maxLength={30} aria-label="Email" aria-describedby="basic-addon1" required/>
					</div>
					<div className="input-group mb-3">
						<input type="password" className="form-control" placeholder="Kata sandi" maxLength={30} aria-label="Password" aria-describedby="basic-addon1" required/>
					</div>
					<div className="btn-group" role="group" aria-label="Basic example">
						<button type="submit" className="btn btn-primary">Masuk</button>
					</div>
				</form>
			</AuthCard>
    </Container>
  )
}

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const AuthCard = styled.div`
	width: 400px;
	height: 500px;
	padding: 20px 50px;
	border-radius: 8px;
	background-color: #FFF;
	box-shadow: 10px 10px 45px #EAEAEA;
`;

const Title = styled.p`
	font-size: 24px;
	font-weight: 500;
	font-family: 'Work Sans',
`;

const LogoGoogle = styled.div`
	width: 15%;
	border: 1px solid #1B73E8;
	justify-content: center;
	background-color: #1B73E8;
`;

const FaGoogle = styled.div`
	color: #FFF;
`;

const ButtonGoogle = styled.button`
	width: 85%;
	height: 36px;
	align-items: center;
	justify-content: center;
	background-color: #1B73E8;
`;

const Divider = styled.div`
	clear: both;
	display: flex;
	margin-top: 20px;
	overflow: hidden;
	position: relative;
	text-align: center;
	align-items: center;
	margin-bottom: 20px;
	justify-content: center;
`
