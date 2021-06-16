import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamMembersList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Team Lead',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamMembersList })
  },
  post(url, { username, email, role }) {
    const newTeamMember = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}