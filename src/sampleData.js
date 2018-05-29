var sampleData = {
  user: {
    id: "45a57030-5d5a-11e8-9d98-a97fe30c17ae",
    name: "Kevin A. Wilson",
    loggedIn: true
  },
  roles: [{
      id: "11eb5ab3-a2ff-4cd1-9d4f-327390e7ec8b",
      production: "e0be0fb4-3e64-4f3a-87f3-a60878c84b2a",
      role: "Governor"
    },
    {
      id: "a2ffc478-2014-47cf-8c58-ccf103b74478",
      production: "85e2fb5f-1263-40f7-b235-abec2a516ad9",
      role: "Daddy Warbucks"
    },
    {
      id: "f6f8e338-1e61-4354-804c-1baac7b55cde",
      production: "4d1718ef-682a-4b2f-b858-d5184da51c7b",
      role: "Mayor Shinn"
    }
  ],
  ui: {
    currentView: "user",
    showAddRoleForm: false
  },
  companies: [
    {
      id: "35aa2103-dadb-486d-956d-5871ba522834",
      name: "Spotlight Playhouse",
	    city:	"Lawrence",
      usState: "MA",
      website: "www.spotlightplayhouse.org",
	    productions: []
    },
    {
      id: "53681073-03d1-4bd2-b6df-07e0fdf5a4eb",
      name: "Pentucket Players",
      city:	"Lawrence",
      usState: "MA",
      website: "www.pentucketplayers.org",
      productions: []
    },
    {
      id: "081d88a6-cbb7-4497-be29-43cd2e9e8494",
      name: "Colonial Chorus Players",
      city:	"Reading",
      usState: "MA",
      website: "www.ccp1961.org",
      productions: []
    },
  ],
  productions: [
    {
      id: "85e2fb5f-1263-40f7-b235-abec2a516ad9",
      company: "35aa2103-dadb-486d-956d-5871ba522834",
      show: "Annie",
      date: "May 2013",
      venue: "Haverhill High School"
    },
    {
      id: "e0be0fb4-3e64-4f3a-87f3-a60878c84b2a",
      company: "53681073-03d1-4bd2-b6df-07e0fdf5a4eb,"
      show: "Man of La Mancha",
      date: "April 2011",
      venue: "The Rogers Center"
    },
    {
      id: "4d1718ef-682a-4b2f-b858-d5184da51c7b",
      company: "35aa2103-dadb-486d-956d-5871ba522834",
      show: "The Music Man",
      date: "May 2014",
      venue: "Haverhill High School"
    }
  ]
}


export {
  sampleData
};
