(() => {
    type Role = 'SuperAdmin' | 'Teacher' | 'Student';

    function access(role: Role) {
        console.log(`Access granted for role: ${role}`);
    
    }

    access('Teacher');
})