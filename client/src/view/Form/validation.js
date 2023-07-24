const validate = (formData) => {
    let errors = {};
    if (!/^[A-Za-z]+$/.test(formData.title) && formData.title.length > 0 && formData.title.length < 35) {
        errors.title = 'Debe ser solo Letras';
    }

    const healthScoreValue = parseFloat(formData.healthScore);
    if (isNaN(healthScoreValue) || healthScoreValue <= 0 || healthScoreValue > 100) {
        errors.healthScore = 'Debe ser Mayor que 0 y máximo 100';
    }

    if (!/^https?:\/\/\S+$/.test(formData.image)) {
        errors.image = 'Debe ser una URL válida';
      }

      if (!formData.instructions.trim()) {
        errors.instructions = 'El campo Paso a paso no puede estar vacío';
      }

      if (!formData.summary.trim()) {
        errors.summary = 'El campo Paso a paso no puede estar vacío';
      }

    return errors;
};

export default validate