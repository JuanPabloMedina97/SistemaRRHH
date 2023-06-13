const staff = [
    {
        puestoDeTrabajo: {
            
            alta: '',[fecha de innicio de temporada]  // guardar consultas de todos los años
            baja: '', [fecha de baja de temporada]    // guardar consultas de todos los años
            categoria: '', [Pedir a sergio]
            condicionCitricola: '', [] //quitar
            art: '', [asociar, prevencion]
            carnetSanidad: '', [si/no] //agregar fecha de vencimiento y de  emision
            carnetManipuladorAlimentos: '', [si/no] //agregar fecha de vencimiento y de emision
            

        },
        direccion: {
            provincia: '', [mostrar lista de sugerencias]
            localidad: '',[mostrar lista de sugerencias]
            cp: '', manual
            calle: '', manual
            numero: '', manual
            piso: '', manual
            dpto: '', manual
            barrio: '', manual
            direccion2: '', //quitar
            detalle: '',  manual
            entreCalles: '',  manual
            indicacionAdicional: ''  manual
        },
        direccion2: { //preguntar si tiene direccion2, si es si mostrar campos, si es no/ no mostrar
            provincia: '',
            localidad: '',
            cp: '',
            calle: '',
            numero: '',
            piso: '',
            dpto: '',
            barrio: '',
            detalle: '',
            entreCalles: '',
            indicacionAdicional: ''
        },
        contacto: {
            numeroTelefono: '', manual
            numeroTelefono2: '', manual
            correo: '', manual
            correo2: '', manual
            Pariente: { manual
                nombre: '', manual
                numero: '' manual
            },
            Pariente2: { manual
                nombre: '', manual
                numero: '' manual
            },
        },
        informacionPersonalDos: {
    
            antiGripal: '',[fecha ultima aplicacion] //guardar fechas de cada aplicacion
        
            tratamientoMedicoMedicacion: {
                medicacion: 'si o no',[] //en caso de si poner nombre de medicacion
                nombreMedicacion: ''[]
            },
            movilidad: '' [bicicleta, moto, auto, colectivo] //medio de transporte
        },
        educacion: {
            primaria: '', [Completo, incompleto, cursando]
            secundaria: '', [Completo, incompleto, cursando]
            terciario: '', [Completo, incompleto, cursando] //agregar campo universitario
            cursando: '', [si/no] //agregar campo para detallar que cursa
            cursos: '' manual [] //sacar
        },
        datosBancarios: {
            banco: '', manual
            cbu: '', manual
            alias: '', manual
            medioDeCobro: '', [debito, cajero humano]
            direccion: '', manual //agregar localidad
            direccionDos: '', manual //sacar
            direccionTres: '' manual //sacar
        },
        talleRopa: {
            pantalon: '',[agregar lista]
            camisa: '',[agregar lista]
            botin: '',[agregar lista]
            mameluco: '',[agregar lista]
            zapatilla: '',[agregar lista]
            botasGoma: '',[agregar lista]
            gorra: '',[agregar lista]
            campera: '',[agregar lista]
            remera: '',[agregar lista]
            chomba: '',[agregar lista]
            equipoLluvia: '',[agregar lista]
            delantal: '',[agregar lista]
            chaquetaDefensa: '',[agregar lista]

        },

        observacion: [
            {
                fecha: '', manual
                descripcion: '', manual
            }
        ],
    },

]



export default staff;