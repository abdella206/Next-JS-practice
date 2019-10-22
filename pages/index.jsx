// import Layout from '../components/Layout';
// import axios from 'axios'
// import Fetch from 'isomorphic-unfetch'
// import Prices from '../components/Prices'
// const Index = (props) => (
//     <Layout>
//         <div>
//             <h1>Welcome to BitzPrice</h1>
//             <Prices bpi={props.bpi}/>
//         </div>
//     </Layout>



// );


// Index.getInitialProps = async function () {
//     // res is assigned the response once the axios
//     // async get is completed
//     const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
//     // Return properties
//     return { bpi: res.data }

// }


// // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
// //         .then(response => {
// //             return {
// //                 bpi: response.data
// //             }
// //         })
// //         .catch(err => {
// //             return {
// //                 bpi: {
// //                     time: { updated: 'error' }
// //                 },
// //                 error: err
// //             }
// //         })



// export default Index 


import axios from 'axios'
import Fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi} />
        </div>
    </Layout>
);




Index.getInitialProps = async function () {
    // res is assigned the response once the axios
    // async get is completed
    const res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    // Return properties
    return { bpi: res.data.bpi }

}
// Index.getInitialProps = async function () {
//     const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//     const data = await res.json();
    
//     return {
//         bpi: data.bpi
        
//     };
// }

export default Index;