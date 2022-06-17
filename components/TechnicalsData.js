import React, {useState, useEffect} from 'react'
import fetchData from '../pages/api/fetchData';
import { Select } from 'antd';
const { Option } = Select;

const TechnicalsData = () => {

  const [technicals, setTechnicals] = useState([]);

useEffect(() => {
  const Start = async () => {
    try {
      const response = await fetchData();
      setTechnicals(response);
    } catch(err) {
      console.err(err)
    }
  }
  Start();
  }, []);
  
  console.log(technicals);

return (
    <>
      <Select
    showSearch
    className='Search_bar'
    style={{
      width: 900,
    }}
    placeholder="Cométence recherchée, Technologies, Qualités,..."
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
  >
    <Option>
        {technicals.map((technicals, i) => {
        return <li key={i}> {technicals.technicalName} </li>
        })}
    </Option>
  </Select>
    </>
  );
}

export default TechnicalsData;