import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      task: Model,
      cliente: Model,
      rol:Model
    },

    seeds(server) {
      server.create("rol", { rol: "Supervisor", id: 0});
      server.create("rol", { rol: "Cajero", id: 1});
      server.create("rol", { rol: "Dueño", id: 2});
      server.create("user", {id:1, nombre: "Bob", apellido: 'Wills',usuario:'j@hotmail.com',rol:'Supervisor', sucursal:'4', contraseña: '0000' });
      server.create("user", {id:2, nombre: "Bob2", apellido: 'Wills',usuario:'j@hotmail.com',rol:'Supervisor', sucursal:'3', contraseña: '0000'});
      server.create("task",{codigo: 'Argentina', descripcion: 'descripcion',duracionPlanificada: '45 min', usuarioId:'0'});
      server.create("cliente",{
        id:10,
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

      this.get("/clients/:id", (schema, request) => {
        let id = request.params.id;
      
        return schema.clientes.find(id);
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

      this.get("/users", (schema) => {
        return schema.users.all()
      });

      this.get("/users/:id", (schema, request) => {
        let id = request.params.id;
      
        return schema.users.find(id);
      });

      this.get("/users/roles", (schema) => {
        return schema.rols.all()
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
   //viejo
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