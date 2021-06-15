import axios from "axios";

export default class EmployerService{
    getEmployers() {
        return axios.get("http://localhost:8080/api/employers/getall");
    }
    addEmployer(){
        return axios.post()
    }
    getEmployerById(id){
        return axios.get("http://localhost:8080/api/employers/getbyid?id=" + id);
    }
    
}