import axios from 'axios';

export async function getEntityById(req, res) {
  try {
    const { id } = req.params;
    const { data } = await axios.get( `${process.env.url}${id}`);
    if (!Object.keys(data.data).length) res.status(404).json({error: 'Entity not found'})
    else res.status(200).json(data.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  } 
}

export async function getEntitys(req, res) {
  try {
    let entitys = [];
    for (let i = 1; i <= 20; i++){
      const { data } = await axios.get( `${process.env.url}${i}`);
      entitys.push(data.data);
    }
    res.json(entitys);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  } 
}

export async function getEntityByName(req, res) {
  try {
    const { name } = req.params;
    let entitys = [];
    for(let i = 1; i <= 20; i++){
      const { data } = await axios.get( `${process.env.url}${i}`, {timeout: 20000});
      entitys.push(data.data);
    }
    const resultado = entitys.find( entity => entity.name === name );
    if (!resultado) res.status(404).json({error: 'Entity not found'})
    else res.json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message});
  }
}
