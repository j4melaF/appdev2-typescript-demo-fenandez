(() => {
    type Role = 'admin' | 'editor' | 'viewer';

    let userRole: Role = 'editor';

    function access(role: Role) {
        console.log(`Access granted for role: ${role}`);
    }
})

