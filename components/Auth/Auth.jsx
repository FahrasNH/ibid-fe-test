import { apiPostAuth } from '../../utils/api'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { isEmpty, capitalize } from 'lodash'
import GoogleLogin from 'react-google-login'
import Link from 'next/link'
import {
  Container, AuthCard,
  Title, Divider,
  LinkAuth,
} from './authStyle'

const Auth = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSuccess, setSuccess] = useState({
    message: '',
    status: null,
  })

  useEffect(() => {
    if (!isEmpty(window.localStorage.getItem('isToken'))) {
      router.push('/')
    }
  }, [])

  const responseGoogle = (response) => {
    const data = {
      account_id: response.profileObj.googleId,
      type: 'google',
      name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl,
    }

    window.localStorage.setItem('isToken', response.accessToken)
    window.localStorage.setItem('isProfile', JSON.stringify(data))

    setSuccess({ status: true, message:'Berhasil masuk!' })
    setTimeout(() => {
      setSuccess({ status: true, message: '' })
      router.push('/')
    }, 2000)
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await apiPostAuth(`https://reqres.in/api${router.pathname}`, form)

      window.localStorage.setItem('isToken', response.data.token)
      if (response.status === 200) {
        const data = {
          type: 'my-app',
          name: (form.email || '').substring(0, form.email.lastIndexOf("@")),
          email: form.email,
          imageUrl: '',
        }

        router.pathname === '/login' ? setSuccess({ status: true, message:'Berhasil masuk!' }) : setSuccess({ status: true, message: 'Berhasil daftar!' })

        setTimeout(() => {
          setSuccess({ status: true, message: '' })
          window.localStorage.setItem('isProfile', JSON.stringify(data))
          router.push('/')
        }, 2000)
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 400) {
        router.pathname === '/login' ? setSuccess({ status: false, message: 'Email atau Password salah!' }) : setSuccess({ status: false, message: 'Gagal mendaftar!' })
        setTimeout(() => {
          setSuccess({ status: false, message: '' })
        }, 5000)
      }
    } 
  }

  return (
    <Container className="container-sm">
      <AuthCard>
        { router.pathname === '/login' ? <Title>Masuk</Title> : <Title>Daftar</Title> }
        { router.pathname === '/login' && (
          <>
            <GoogleLogin
              clientId="1036312684002-9r1ei9mim483alvglj88bovq1prufg1i.apps.googleusercontent.com"
              buttonText="Masuk dengan Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="google-btn"
              cookiePolicy={'single_host_origin'}
            />
            <Divider className="hr-label">
              <span>atau</span>
            </Divider>
          </>
        )}
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
          { !isEmpty(isSuccess.message) && (
            <div className={`alert ${isSuccess.status ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`} role="alert">
              {capitalize(isSuccess.message)}
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
