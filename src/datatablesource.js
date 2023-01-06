export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];



export const userTableCol = [
{ 
  field: "userid", 
  headerName: "USER ID", 
  width: 70 
},
  {
    field: "username",
    headerName: "User Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "birthday",
    headerName: "Birthday",
    width: 100,
  },
  
];

export const roomTableCol = [
  { 
    field: "roomid", 
    headerName: "ROOM ID", 
    width: 70 
  },
    {
      field: "roomname",
      headerName: "Room Name",
      width: 230,
    }
    
  ];

  export const roomUsersTableCol = [
    { 
      field: "id", 
      headerName: "USER ID", 
      width: 70 
    }
      
    ];

