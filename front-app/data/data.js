const staff = [
    {
        legajoId: '',
        cuilId: '',
        nombre: '',
        apellido: '',
        puestoDeTrabajo: {
            sector: '',
            linea: '',
            puesto: '',
            turno: '',
            empresa: '',
            condicion: '',
            tipoDePago: '',
            ingreso: '',
            alta: '',
            baja: '',
            categoria: '',
            convenio: '',
            sindicato: '',
            solidario: '',
            condicionCitricola: '',
            art: '',
            carnetSanidad: '',
            carnetManipuladorAlimentos: '',

        },
        direccion: {
            provincia: '',
            localidad: '',
            cp: '',
            calle: '',
            numero: '',
            piso: '',
            dpto: '',
            barrio: '',
            direccion2: '',
            detalle: '',
            entreCalles: '',
            indicacionAdicional: ''
        },
        direccion2: {
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
            numeroTelefono: '',
            numeroTelefono2: '',
            correo: '',
            correo2: '',
            Pariente: {
                nombre: '',
                numero: ''
            },
            Pariente2: {
                nombre: '',
                numero: ''
            },
        },
        informacionPersonalDos: {
            sexo: '',
            estadoCivil: '',
            edad: '',
            nacimiento: '',
            lentes: '',
            antiGripal: '',
            carnetVacuna: '',
            tratamientoMedicoMedicacion: {
                medicacion: 'si o no',
                nombreMedicacion: ''
            },
            movilidad: '' //medio de transporte
        },
        educacion: {
            primaria: '',
            secundaria: '',
            terciario: '',
            cursando: '',
            cursos: ''
        },
        datosBancarios: {
            banco: '',
            cbu: '',
            alias: '',
            medioDeCobro: '', //
            direccion: '',
            direccionDos: '',
            direccionTres: ''
        },
        talleRopa: {
            pantalon: '',
            camisa: '',
            botin: '',
            mameluco: '',
            zapatilla: '',
            botasGoma: '',
            gorra: '',
            campera: '',
            remera: '',
            chomba: '',
            equipoLluvia: '',
            delantal: '',
            chaquetaDefensa: '',

        },

        observacion: [
            {
                fecha: '',
                descripcion: '',
            }
        ],
    },

]



export default staff;