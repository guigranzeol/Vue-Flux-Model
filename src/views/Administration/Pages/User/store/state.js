export default{
    formData:{
        id: null,
        name: null,
        email: null,
        admin: false,
        user_type: '0',
        created_at: null,
        updated_at: null,
        people_id: null
    },
    list:[],
    userType:[
        { value: '0', name: "Usuario" },
        { value: '1', name: "Lojista" }
      ],
    errors:[],
}