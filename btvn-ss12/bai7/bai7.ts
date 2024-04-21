class Account {
    constructor(protected id: number, protected userName: string, protected password: string, protected role: string, protected isLogin: boolean = false) {}

    login(): void {
        if (!this.isLogin) {
            this.isLogin = true;
            console.log("Đăng nhập thành công ");
        } else {
            console.log("Bạn đã đăng nhập ");
        }
    }

    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công ");
        } else {
            console.log("");
        }
    }
}

class UserAcc extends Account {
    constructor(id: number, userName: string, password: string, role: string, private status: string) {
        super(id, userName, password, role);
    }

    login(): void {
        if (this.status === "active") {
            super.login();
        } else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
        } else {
            console.log("Trạng thái tài khoản không hợp lệ");
        }
    }
}

let user = new UserAcc(1, "user123", "123456", "user", "active");
user.login(); 
user.logout(); 
user.login(); 
