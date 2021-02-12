import { apiPostAuth } from '../../utils/api'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isEmpty, capitalize } from 'lodash'
import Link from 'next/link'
import {
  Container, AuthCard,
  Title, LogoGoogle,
  ButtonGoogle, Divider,
  FaGoogle, LinkAuth,
} from './authStyle'

const Auth = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isError, setError] = useState('')

  useEffect(() => {
    if (!isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/')
    }
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await apiPostAuth(`https://reqres.in/api${router.pathname}`, form)

      window.localStorage.setItem('isToken', response.data.token)
      router.push('/')
    } catch (error) {
      const err = !isEmpty(error.response) ? error.response.data.error : ''
      setError(err)
      setTimeout(() => {
        setError('')
      }, 5000)
    } 
  }

  return (
    <Container className="container-sm">
      <AuthCard>
        { router.pathname === '/login' ? <Title>Masuk</Title> : <Title>Daftar</Title> }
        {
          router.pathname === '/login'
          ? <>
            <div className="input-group">
              <LogoGoogle className="input-group-text" id="basic-addon1"><FaGoogle className="fab fa-google"></FaGoogle></LogoGoogle>
              <ButtonGoogle type="submit" className="btn btn-primary">Masuk dengan Google</ButtonGoogle>
            </div>
            <Divider className="hr-label">
              <span>atau</span>
            </Divider>
          </> : null
        }
        <form onSubmit={onSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              maxLength={30}
              aria-label="Email"
              aria-describedby="basic-addon1"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Kata sandi"
              maxLength={30}
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required/>
          </div>
          { !isEmpty(isError) && (
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              {capitalize(isError)}
            </div>
          )}
          <div className="btn-group mb-3" role="group" aria-label="Basic example">
            <button type="submit" className="btn btn-primary">{router.pathname === '/login' ? 'Masuk' : 'Daftar'}</button>
          </div>
          { router.pathname === '/login' ? <LinkAuth>Belum punya akun? <Link href="/register"><a>Daftar</a></Link></LinkAuth> : <LinkAuth>Sudah punya akun? <Link href="/login"><a>Masuk</a></Link></LinkAuth> }
        </form>
      </AuthCard>
    </Container>
  )
}

export default Auth
