
import './App.css';
import React,{Component} from 'react';


class App extends Component{
  
  constructor(){
    
    super();
    this.state={
      
      data:[
        { "sno":1,
          "name":"Manasa",
          "location":"Gunturu"
        },
        { "sno":2,
          "name":"Preethi",
          "location":"Hyderabad"
        },
        { "sno":3,
          "name":"Vasanth",
          "location":"Karnool"
        },
        {"sno":4,
          "name":"Sailesh",
          "location":"Tirupathi"
        },
        {"sno":5,
          "name":"Aishwarya",
          "location":"Ananthapuram"
        },
        { "sno":6,
        "name":"sandeep",
        "location":"Gunturu"
      },
      { "sno":7,
        "name":"Tejaswini",
        "location":"Hyderabad"
      },
      { "sno":8,
        "name":"Lavanya",
        "location":"Karnool"
      },
      {"sno":9,
        "name":"Sowjanya",
        "location":"Tirupathi"
      },
      {"sno":10,
        "name":"Saran",
        "location":"Ananthapuram"
      },
      {"sno":11,
        "name":"Ramya",
        "location":"Ananthapuram"
      },
      { "sno":12,
      "name":"Priyanka",
      "location":"Gunturu"
    },
    { "sno":13,
      "name":"Parvathi",
      "location":"Hyderabad"
    },
    { "sno":14,
      "name":"Sridevi",
      "location":"Karnool"
    },
    {"sno":15,
      "name":"Karuna",
      "location":"Tirupathi"
    },
    {"sno":16,
      "name":"sushmitha",
      "location":"Ananthapuram"
    },
      ],
      inputValue:[{ "sno":1,
      "name":"Manasa",
      "location":"Gunturu"
    },
    { "sno":2,
      "name":"Preethi",
      "location":"Hyderabad"
    },
    { "sno":3,
      "name":"Vasanth",
      "location":"Karnool"
    },
    {"sno":4,
      "name":"Sailesh",
      "location":"Tirupathi"
    },
    {"sno":5,
      "name":"Aishwarya",
      "location":"Ananthapuram"
    },
    { "sno":6,
    "name":"sandeep",
    "location":"Gunturu"
  },
  { "sno":7,
    "name":"Tejaswini",
    "location":"Hyderabad"
  },
  { "sno":8,
    "name":"Lavanya",
    "location":"Karnool"
  },
  {"sno":9,
    "name":"Sowjanya",
    "location":"Tirupathi"
  },
  {"sno":10,
    "name":"Saran",
    "location":"Ananthapuram"
  },
  {"sno":11,
    "name":"Ramya",
    "location":"Ananthapuram"
  },
  { "sno":12,
  "name":"Priyanka",
  "location":"Gunturu"
},
{ "sno":13,
  "name":"Parvathi",
  "location":"Hyderabad"
},
{ "sno":14,
  "name":"Sridevi",
  "location":"Karnool"
},
{"sno":15,
  "name":"Karuna",
  "location":"Tirupathi"
},
{"sno":16,
  "name":"sushmitha",
  "location":"Ananthapuram"
},],
      sno:"DESC",
      name:"ASC",
      location:"ASC",
    }
  }

  changeInput=(e)=>{
    let inValue=e.target.value;
    var data1;
    if( inValue === ""){
      data1=this.state.data;
    }
    else{
      data1=this.state.data.filter((value) => {
        console.log(value);
        return value.name.toLowerCase().includes(inValue.toLowerCase()) || value.location.toLowerCase().includes(inValue.toLowerCase())
      });
    }
    console.log("data value in sort:---",data1);
    this.setState({inputValue:data1})
  }

  //rendering Sorted Array
  arraySortresult=(val,result,typeV)=>{
    console.log("REsult in ::::",result);
    if(val === "sno"){
      this.setState({
        inputValue: result,sno:typeV
      });
    }
    else if(val === "name"){
      this.setState({
        inputValue: result,name:typeV
      });
    }
    else{
      this.setState({
        inputValue: result,location:typeV
      });
    }
  }


  //Sorting Table values each column
  sortTable=(e)=>{
    let sortValues=this.state.inputValue;
    // let checkingSort;
    var sortedAsceding
    console.log("VAlue----",e);
    if(this.state[e] === "ASC"){
      console.log(sortValues);
      let count=0;
      sortedAsceding = sortValues.sort((a, b) => {
      console.log("a object::--------",a);
      console.log("b Object ..............",b);
      count++;
      if(e === "sno"){
        return a[e] > b[e] ? 1:-1
      }
      else{
        return a[e].toLowerCase() > b[e].toLowerCase() ? 1:-1}
      }
     
    );
    console.log(count);
    // checkingSort="DESC";
      this.arraySortresult(e,sortedAsceding,"DESC");
    }
    if(this.state[e] === "DESC"){
      sortedAsceding = sortValues.sort((a, b) => {
      
      if(e === "sno"){
        return a[e] < b[e] ? 1:-1
      }
      else{
        return a[e].toLowerCase() < b[e].toLowerCase() ? 1:-1}
      }


    );

    this.arraySortresult(e,sortedAsceding,"ASC");
    // checkingSort="ASC";
    }
    
    console.log("------------",this.state[e]);

    console.log("sortedArray::",sortedAsceding);
   
  }


  //Checking intial input value null or not

  // checkingInputState=()=>{
  //   if(this.state.inputValue.length < 1){
  //     this.setState({inputValue:this.state.data});
  //   }
  // }
 

  render(){

    // this.checkingInputState();
    
    const cont={
      width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   
    }
    
    var th={
      paddingTop: 12,
    paddingBottom: 12,
    width: 200,
    textAlign: "center",
    backgroundColor: "#04AA6D",
    color: "white",
    }
   
    const {inputValue}=this.state;
   
    return (
     
      <div style={cont}>
        <Employee Details/>
        <input type="text" className="inputSeerch" onChange={this.changeInput} placeholder="Search Inputvalue" />
        <table className="table">
          <thead>
          <tr>
          <th style={th} onClick={()=>this.sortTable("sno")}>S.No</th>
            <th style={th} onClick={()=>this.sortTable("name")}>Name</th>
            <th style={th} onClick={()=>this.sortTable("location")}>Location</th>
          </tr>
          </thead>
          {inputValue.length < 1? <td className="para" colSpan = "3">No Matching Values</td> : inputValue.map((item)=> <List data = {item} />)}
         
          
        </table>
      </div>
    );
  }
}

class List extends Component{
  
  render(){
    var td={
      border: "1px solid #ddd",
    textAlign: "center",
    padding: "8px",
    }
    return(
      <tbody>  
      <tr>
        <td style={td}>
          { this.props.data.sno }
          
        </td>
        <td style={td}>
          {this.props.data.name}
        </td >
        <td style={td}>{this.props.data.location}</td>
      </tr>
      </tbody> 
      
    )
    
  }
  
}


class Employee extends Component{
  
  render(){
    return(
      <div>
        <h1>Employee Name Details</h1>
      </div>
    )
  }
}


export default App;









