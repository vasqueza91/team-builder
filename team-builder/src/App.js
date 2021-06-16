
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import TeamMemberForm from './components/TeamMemberForm'
import TeamMember from './components/TeamMember'
import axios from './axios/index'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newTeamMember = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.role) return
    axios.post('fakeapi.com', newTeamMember)
      .then(res => {
        const teamMemberFromBackend = res.data
        setTeamMembers([teamMemberFromBackend, ...teamMembers])
        setFormValues(initialFormValues)
      })
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])
  return (
    <div className='container'>
      <h1>Form App</h1>
      <TeamMemberForm
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />

{
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }

    </div>
  )
}