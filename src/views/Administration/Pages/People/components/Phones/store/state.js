export default{
    list: [],
    errors:[],
    phoneDialog: false,
    formData:{
      id: null,
      type: null,
      note: null,
      people_id: null,
      number: null
    },
    // Types are controling by controller
    listTypes:[
      { value: "f", name: "Fixo" },
      { value: "w", name: "WhatsApp" },
      { value: "c", name: "Celular" }
    ],
}