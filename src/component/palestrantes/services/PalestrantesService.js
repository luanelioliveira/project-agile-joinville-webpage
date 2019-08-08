import service from '../../../services/BaseService';

const getPalestrantes = async () => {
  const palestrantes = [];

  let data = await service.get('palestrantes', 'nome');
  data.forEach(doc => {
    palestrantes.push({
      nome: doc.data().nome,
      imagem: doc.data().imagem,
      biografia: doc.data().biografia,
    });
  });
  return palestrantes;
}

export default {
  getPalestrantes,
};
