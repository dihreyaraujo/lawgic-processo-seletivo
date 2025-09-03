const SCHEMAS = {
  CREATE: {
    fields: [
      { name: "title", label: "Título", type: "text", required: true, placeholder: "Digite o título", required: true },
      { name: "description", label: "Descrição", type: "textarea", required: true, placeholder: "Digite a descrição" },
      { name: "hearingDate", label: "Data da Audiência", type: "date", required: true }
    ]
  },
  EM_ANDAMENTO: {
    fields: [
      { name: "title", label: "Título", type: "text", required: true },
      { name: "description", label: "Descrição", type: "textarea", required: true },
      { name: "hearingDate", label: "Data da Audiência", type: "date", required: true },
      { name: "notifiedName", label: "Nome do Notificado", type: "text", required: true, placeholder: "Digite o nome do notificado" },
      { name: "notifiedEmail", label: "Email", type: "email", required: true, placeholder: "Ex: teste@teste.com" },
      { name: "notifiedPhone", label: "Telefone", type: "tel", required: true, placeholder: "Ex: 21997564321", pattern: "[0-9]{11,}", minLength: "11", maxLength: "11" },
      { name: "notifiedAddress", label: "Endereço", type: "text", required: true, placeholder: "Digite o endereço" }
    ]
  },
  VALIDACAO: {
    fields: [
      { name: "title", label: "Título", type: "text", required: true, readOnly: true },
      { name: "description", label: "Descrição", type: "textarea", required: true, readOnly: true },
      { name: "hearingDate", label: "Data da Audiência", type: "date", required: true, readOnly: true },
      { name: "notifiedName", label: "Nome do Notificado", type: "text", required: true, readOnly: true },
      { name: "notifiedEmail", label: "Email", type: "text", required: false, readOnly: true },
      { name: "notifiedPhone", label: "Telefone", type: "text", required: false, readOnly: true },
      { name: "notifiedAddress", label: "Endereço", type: "text", required: false, readOnly: true }
    ]
  },
  CONCLUIDO: {
    fields: [
      { name: "title", label: "Título", type: "text", required: true, readOnly: true },
      { name: "description", label: "Descrição", type: "textarea", required: true, readOnly: true },
      { name: "hearingDate", label: "Data da Audiência", type: "date", required: true, readOnly: true },
      { name: "notifiedName", label: "Nome do Notificado", type: "text", required: true, readOnly: true },
      { name: "notifiedEmail", label: "Email", type: "text", required: false, readOnly: true },
      { name: "notifiedPhone", label: "Telefone", type: "text", required: false, readOnly: true },
      { name: "notifiedAddress", label: "Endereço", type: "text", required: false, readOnly: true }
    ]
  }
}

export const getFormSchema = (req, res) => {
  const schema = SCHEMAS
  res.status(200).json(schema)
}
