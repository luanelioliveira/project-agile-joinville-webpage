import service from './BaseService';

const getPatrocinadores = async () => {
  const patrocinadores = [];

  let data = await service.get('patrocinadores', 'nome');
  data.forEach(doc => {
    patrocinadores.push({
      nome: doc.data().nome,
      url: doc.data().url,
    });
  });
  return patrocinadores;
}

export default {
  getPatrocinadores,
};
