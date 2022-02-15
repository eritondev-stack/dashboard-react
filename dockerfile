# Imagem de Origem
FROM node:16-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação
COPY . /app/
#RUN npm install --silent
RUN npm install --silent

RUN chown -R node /app/node_modules

USER node

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Inicializa a aplicação
CMD ["npm", "start"]














