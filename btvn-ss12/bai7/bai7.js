"use strict";
class Account {
    constructor(id, userName, password, role, isLogin = false) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = isLogin;
    }
    login() {
        if (!this.isLogin) {
            this.isLogin = true;
            console.log("Đăng nhập thành công ");
        }
        else {
            console.log("Bạn đã đăng nhập ");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công ");
        }
        else {
            console.log("");
        }
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            super.login();
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa.");
        }
        else {
            console.log("Trạng thái tài khoản không hợp lệ");
        }
    }
}
let user = new UserAcc(1, "user123", "123456", "user", "active");
user.login();
user.logout();
user.login();
