import axios from 'axios'

 async function ApiServices() {

  const getCall = await axios.get();
  const postCall = await axios.post();
  const putCall = await axios.put();
  const deleteCall = await axios.delete();

  return (
{getCall,postCall,putCall,deleteCall}
  );
}

export default ApiServices;