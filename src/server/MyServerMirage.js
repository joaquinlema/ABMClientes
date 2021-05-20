import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      task: Model,
      cliente: Model
    },

    seeds(server) {
      server.create("user", { name: "Bob", apellido: 'Wills',email:'j@hotmail.com' });
      server.create("user", { name: "Alice", apellido: 'McDonal',email:'j@hotmail.com' });
      server.create("task",{codigo: 'Argentina', descripcion: 'descripcion',duracionPlanificada: '45 min', usuarioId:'0'});
      server.create("cliente",{
        alias: 'alias', 
        telefono: '12344412',
        nombre: 'nombre completo', 
        mail:'ja@hotmail.com', 
        direccion:'av peter 123',
        dni:'12344421', 
        cuil: '20-123123123-9', 
        clearingCompra:'clearingCompra', 
        tasaMensualCompra: 'tasa 123',
        comisionCompra:'comision 123',
        clearingVenta: '123a aventa', 
        tasaMensualVenta:'tasa venta', 
        comisionVenta:'comision venta'
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/clients", (schema) => {
        return schema.clientes.all()
      });

      this.post("/clients", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).data;

        return schema.clientes.create(attrs)
      });

      this.post("/clients/delete/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.clientes.find(id).destroy();
      });

      this.patch("/clients/edit/:id", function (schema, request) {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody).data;
      
        return schema.clientes.find(id).update(attrs)
      });

      //viejo
      this.get("/users", (schema) => {
        return schema.users.all()
      });

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).data;

        return schema.users.create(attrs)
      });

      this.post("/users/delete/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.users.find(id).destroy();
      });

      this.patch("/users/edit/:id", function (schema, request) {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody).data;
      
        return schema.users.find(id).update(attrs)
      });

      this.get("/tasks", (schema) => {
        return schema.tasks.all()
      });

      this.post("/tasks", (schema, request) => {
        let attrs = JSON.parse(request.requestBody).data;

        return schema.tasks.create(attrs)
      });

      this.post("/tasks/delete/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.tasks.find(id).destroy();
      });

      this.patch("/tasks/edit/:id", function (schema, request) {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody).data;
      
        return schema.tasks.find(id).update(attrs)
      });

    },
  })

  return server
}