app.factory("HomeModel", function ($http) {
    var users = [];
    api = 'https://irb-v3-jefferson210.c9users.io/api/v1/';

    return {
        getEmpresas: function(){
            empresas=[{
                id:1,
                imagen:"img/connectiflor.png",
                nombre:"Connectiflor S.A",
                mision : "mision de la floricola Connectiflor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ",
                vision :"vision de la empresa 1",

            }
                      ,{
                          id:2,
                          imagen:"img/rosebreeders.png",
                          nombre:"International Rose Breeders",
                          mision:"mision de la empresa 2",
                          vision :"vision de la empresa 2"
                      },
                      {
                          id:3,
                          imagen:"img/janspekrozen.png",
                          nombre:"Jan Spek Rozen",
                          mision:"mision de la empresa 3",
                          vision:"vision de la empresa 3",

                      }
                     ]
            return empresas;
        },


        getCatalogoEmpresa: function(){
            variedades=[{
                id:1,
                idvariedad:1,
                barcode:'CNF-123450',
                imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zfnk_3OWXELqg7swF5lsBONenqR5Waa-_1jdr3r-m9ONsT1A",
                nombre:"Crista",
                color : "rojo",
                tamboton :7.5,
                longitud:10.70,
                numpetalos:5,
                produccion:1157,
                lugar:"Lasso",
                empresa:"connectiflor"
            }
                        ,{
                            id:2,
                            idvariedad:2,
                            barcode:'JSP-123450',
                            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEKclJMqDHSCUtYxmUthLRzupaL_Xh1S_lumwvbd93yMcCwj2",
                            nombre:"Orange Start",
                            color : "rojo",
                            tamboton :7.5,
                            longitud:10.70,
                            numpetalos:5,
                            produccion:1157,
                            lugar:"Cumbaya",
                            empresa:"janspekrozen"

                        },
                        {
                            id:2,
                            idvariedad:3,
                            barcode:'JSP-123451',
                            imagen:"https://www.dicademusculacao.com.br/wp-content/uploads/2017/07/Ch%C3%A1-de-Rosa-Vermelha-1.jpg",
                            nombre:"Start Blush",
                            color : "rojo",
                            tamboton :7.5,
                            longitud:10.70,
                            numpetalos:5,
                            produccion:1157,
                            lugar:"Tabacundo",
                            empresa:"janspekrozen"


                        },
                        {
                            id:2,
                            idvariedad:4,
                            barcode:'JSP-123452',
                            imagen:"https://static1.squarespace.com/static/559dead7e4b0ab5f77f8a7a3/55a987ebe4b0f765fc457b86/55aa8af9e4b07afa0a9b243f/1437240062905/Fidji_zoom.JPG?format=300w",
                            nombre:"Fidji",
                            color : "Novedad Naranja",
                            tamboton :7.5,
                            longitud:10.70,
                            numpetalos:5,
                            produccion:1157,
                            lugar:"Tabacundo",
                            empresa:"janspekrozen"


                        },


                        {
                            id:3,
                            idvariedad:5,
                            barcode:'IRB-123450',
                            imagen:"https://static1.squarespace.com/static/559dead7e4b0ab5f77f8a7a3/559f4a1ae4b096931b3f04a7/559f4ab3e4b07a3865d12b12/1436800168558/Mother_of_Pearl.JPG?format=300w",
                            nombre:"Mother of Pearl",
                            color : "Novedad Rosado",
                            tamboton :7.5,
                            longitud:10.70,
                            numpetalos:5,
                            produccion:1157,
                            lugar:"Tabacundo",
                            empresa:"rosebreeders"


                        },
                        {
                            id:3,
                            idvariedad:6,
                            barcode:'IRB-123451',
                            imagen:"https://static1.squarespace.com/static/559dead7e4b0ab5f77f8a7a3/55a98811e4b0249b70cf317d/55ed100be4b019cad20bc195/1441599552110/Glory_zoom.JPG?format=300w",
                            nombre:"Glory",
                            color : "Hot Pink",
                            tamboton :7.5,
                            longitud:10.70,
                            numpetalos:5,
                            produccion:1157,
                            lugar:"Tabacundo",
                            empresa:"rosebreeders"


                        },
                        {
                            id:3,
                            idvariedad:7,
                            barcode:'IRB-123452',
                            imagen:"https://static1.squarespace.com/static/559dead7e4b0ab5f77f8a7a3/55a04e7ee4b0936a4c14dd2c/5636c94ee4b09ef9b624a093/1446431060356/Mint_single+%282%29.jpg?format=300w",
                            nombre:"Mint",
                            color : "Verde-Amarillo",
                            tamboton :7.5,
                            longitud:10.70,
                            numpetalos:5,
                            produccion:1157,
                            lugar:"Tabacundo",
                            empresa:"rosebreeders"


                        }

                       ]
            return variedades;
        },

        getirbselections:function(param){
            // return $http.get(api+param); 
        },

        empresa : {},
        variedad:{}

    }



});