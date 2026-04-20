def verificaEmail (EMAIL_VALIDO , SENHA_VALIDA):
    # DADOS FALSOS PARA TESTE (Substitua por uma consulta ao banco de dados)
    EMAIL_VALIDO = "admin@teste.com"
    SENHA_VALIDA = "123456"

    # Validação de credenciais
    if dados.email == EMAIL_VALIDO and dados.senha == SENHA_VALIDA:
        return {
            "status": "sucesso",
            "mensagem": "Login aprovado",
            "token": "seu_jwt_token_super_seguro_gerado_aqui",
            "usuario": {
                "nome": "Administrador",
                "email": dados.email
            }
        }
    
    # Se falhar, retorna erro 401 (Não Autorizado)
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Email ou senha incorretos."
    )