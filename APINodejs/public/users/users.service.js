const user = [{id: 1, userName: 'grenier', password: '0123', firstName: 'lepuit', lastName: 'frank'},
                {id: 2, userName: 'garnier', password: 'Formation13@', firstName: 'lahoule', lastName: 'kilian'},
                {id: 3, userName: 'leGeux', password: 'visitor', firstName: 'ouille', lastName: 'jacque'},
                {id: 4, userName: 'ToufikSama', password: 'N@rut0', firstName: 'lahoule', lastName: 'jeanne'}
                ];

module.exports={
    getAll
};

async function getAll(){
    return user.map(u =>{
        const { password, ...userWithoutPassword} = u
        return userWithoutPassword;
    });
}