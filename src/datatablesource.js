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
    headerName: "ID", 
    width: 70 
  },
    {
      field: "roomname",
      headerName: "Room Name",
      width: 230,
    }
    
  ];
  export const deviceTableCol = [
    { 
      field: "deviceid", 
      headerName: "ID", 
      width: 100 
    },
    { 
      field: "details", 
      headerName: "Descriptoin", 
      width: 300 
    }
      
      
    ];

  export const roomUsersTableCol = [
    { 
      field: "id", 
      headerName: "USER ID", 
      width: 70 
    }
      
    ];

    export const roominstasnceTableCol = [
      { 
        field: "id", 
        headerName: "Instance ID", 
        width: 150 
      },{ 
        field: "instancename", 
        headerName: "Instance Name", 
        width: 500 
      }
        
      ];

      export const attendanceTableCol = [
        { 
          field: "uid", 
          headerName: "User ID", 
          width: 150 
        },
        { 
          field: "currenttime", 
          headerName: "Time", 
          width: 300 
        },
        { 
          field: "verificationmode", 
          headerName: "Verify mode", 
          width: 300 
        },
        // { 
        //   field: "verificatoindata", 
        //   headerName: "verificatoin data", 
        //   width: 200 
        // }
          
        ];



