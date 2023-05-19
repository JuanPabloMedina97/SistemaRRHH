



import axios from 'axios';

axios.get('https://run.mocky.io/v3/20857017-5729-4774-ba8e-10b02369fb97')
  .then(response => {
    const data = response.data;
    const result = data.find( obj => obj.legajo === 1002)
    console.log(result);
  })
  .catch(error => console.error(error));
