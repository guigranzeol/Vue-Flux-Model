import Test from '@/views/Administration/Pages/Default/index'
import Home from '@/views/Administration/Pages/Home/Home'
import Users from '@/views/Administration/Pages/User/Users'
import FormUser from '@/views/Administration/Pages/User/FormUser'
import People from '@/views/Administration/Pages/People/People'
import FormPeople from '@/views/Administration/Pages/People/FormPeople'

const routes = [
    {
        path: '/test',
        props: true,
        component: Test
    },
    {
        path: '/people',
        props: true,
        component: People
    },
    {
        path: '/form-people',
        props: true,
        component: FormPeople,
        children: [
            { path: ':id', component: FormUser, props: true, }
        ]
    },
    {
        path: '/adm',
        props: true,
        component: Home
    },
    {
        path: '/users',
        props: true,
        component: Users
    },
    {
        path: '/form-user',
        props: true,
        component: FormUser,
        children: [
            { path: ':id', component: FormUser, props: true, }
        ]
    },



]

export default routes