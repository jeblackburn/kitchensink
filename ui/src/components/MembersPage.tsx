import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Member from '../members/member.ts'

const members= {
  "_embedded" : {
    "members" : [ {
      "id" : 2,
      "name" : "John Lennon",
      "email" : "john@thebeatles.com",
      "phoneNumber" : "4321432",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/members/2"
        },
        "member" : {
          "href" : "http://localhost:8080/api/members/2"
        }
      }
    }, {
      "id" : 3,
      "name" : "Paul McCartney",
      "email" : "Paul@thebeatles.com",
      "phoneNumber" : "4321432",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/members/3"
        },
        "member" : {
          "href" : "http://localhost:8080/api/members/3"
        }
      }
    }, {
      "id" : 53,
      "name" : "Ringo Starr",
      "email" : "ringo@thebeatles.com",
      "phoneNumber" : "PA65000",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/members/53"
        },
        "member" : {
          "href" : "http://localhost:8080/api/members/53"
        }
      }
    }, {
      "id" : 54,
      "name" : "Ringo Starr",
      "email" : "ringo2@thebeatles.com",
      "phoneNumber" : "PA65000",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/members/54"
        },
        "member" : {
          "href" : "http://localhost:8080/api/members/54"
        }
      }
    }, {
      "id" : 103,
      "name" : "Ringo Starr",
      "email" : "ringo3@thebeatles.com",
      "phoneNumber" : "PA65000",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/members/103"
        },
        "member" : {
          "href" : "http://localhost:8080/api/members/103"
        }
      }
    } ]
  },
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/api/members?page=0&size=20"
    },
    "profile" : {
      "href" : "http://localhost:8080/api/profile/members"
    },
    "search" : {
      "href" : "http://localhost:8080/api/members/search"
    }
  },
  "page" : {
    "size" : 20,
    "totalElements" : 5,
    "totalPages" : 1,
    "number" : 0
  }
}
const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: "Email Address", width: 130},
  { field: 'phoneNumber', headerName: "Phone Number", width: 60},
];

const paginationModel = { page: 0, pageSize: 5 };

export default function MembersPage() {
  const currentMemberList: Member[] = members["_embedded"]["members"];
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={currentMemberList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );

}