const esperarSegundos = async (segundos) => {
  const milisegundos = segundos * 1000;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milisegundos);
  });

  console.log(`Han pasado ${segundos} segundos.`);
};

export default esperarSegundos;
