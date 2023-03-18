import MOCK_DATA from '../DATA/MOCK_DATA.json'


 export const pedirDatos = () => {
    return new Promise ((resolve, rejected) => {
            setTimeout(() => {
                resolve (MOCK_DATA)
            }, 2500)
            
    })  
    
}