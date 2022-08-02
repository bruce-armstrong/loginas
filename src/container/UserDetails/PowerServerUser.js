const PowerServerUser = async (token) => {
    let userProvider;
    const res = await fetch(`https://172.16.0.154:5000/connect/userinfo`, {
        method: 'get',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    const res_obj = await res.json();
    const me = JSON.parse(res_obj.body);
    console.log(me);
    if (me.sub) {
        userProvider = {
            name: me.name,
            email: me.email,

        }
    }
    return userProvider;

}


export default PowerServerUser;
