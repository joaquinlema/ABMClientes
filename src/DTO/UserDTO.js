
export default class UserDTO {

    static getAllUser(res) {
        const usersDTO = [];
        for (let i = 0; i < res.length; i++) {
            let obj = {};

            obj.userId = res[i].userId;
            obj.lastName = res[i].lastName;
            obj.firstName = res[i].firstName;
            obj.userCode = res[i].userCode;
            obj.role = res[i].role;
            obj.branchOffice = res[i].branchOfficeDTO.number;
            obj.branchOfficeId = res[i].branchOfficeDTO.branchOfficeId

            usersDTO.push(obj);
        }

        return usersDTO;
    }

    static editUser(res) {
        let obj = {};

        obj.userId = res.userId;
        obj.lastName = res.lastName;
        obj.firstName = res.firstName;
        obj.userCode = res.userCode;
        obj.role = res.role;
        obj.branchOffice = res.branchOfficeDTO.number;
        obj.branchOfficeId = res.branchOfficeDTO.branchOfficeId
        return obj;
    }

    static getUser = (res) => {
        let obj = {};
        obj.userId = res.userId;
        obj.lastName = res.lastName;
        obj.firstName = res.firstName;
        obj.userCode = res.userCode;
        obj.role = res.role;
        obj.passwordHash = res.passwordHash;
        obj.branchOffice = res.branchOfficeDTO.number;
        obj.branchOfficeId = res.branchOfficeDTO.branchOfficeId


        return obj;
    }


    static getUsersRols() {
        const data = [
            { rol: "Administrador", id: 0 },
            { rol: "Supervisor", id: 1 },
            { rol: "Dueño", id: 2 },
            { rol: "Cajero", id: 3 }]

        return data;
    }

    static ToEntity(res, id) {
        let obj = {};
        obj.lastName = res.apellido
        obj.firstName = res.nombre
        obj.userCode = res.usuario;
        obj.passwordHash = res.contraseña;
        obj.role = res.rol;
        obj.userId = id;
        obj.branchOfficeId = res.sucursal;
        return obj;
    }
}