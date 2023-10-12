**Homework9_Rakamin_Restfull_API_Middleware**
Kerjakan soal homework ini berdasarkan data SQL berikut.

Soal 1: Buatlah RESTful API yang terdiri dari GET, POST, DELETE, dan PUT. Setelah itu buatlah 
endpoint untuk register user dan login user untuk implementasi authorization dan 
authentication. Pastikan yang hanya bisa mengakses API hanyalah user yang terdaftar.

Soal 2: Lakukan Pagination pada GET users dan GET movies dengan limit 10 user.

Soal 3: Buatlah dokumentasi API menggunakan swagger

Soal 4: Implementasikan Logging server pada aplikasi yang teman-teman buat

**Step nya untuk running**

1. Clone repo tersebut ke local masing2
2. Open menggunakan VSCode
3. Open terminal dan jalankan script `npm install`
4. Setup database di file config.json di folder config(sesuai punya kalian)
5. Create `.env` file untuk menyimpan secret JWT
6. Running migration untuk migrasi table nya dengan perintah `npx sequelize db:migrate`
7. Running seeding untuk sample data dengan perintah `npx sequelize db:seed:all`
8. Running aplikasi dengan perintah `npm run play`
9. Open menggunakan Postman sesuai dengan endpoint yang ada
10. Register user dengan Postman
    ![image](https://github.com/zcdanny/Homework9_Rakamin_Restfull_API_Middleware/assets/100658079/7b6d29f1-3e91-48de-b4bd-0825b81f99d8)
12. Login user dengan Postman utk dapet auth token
    ![image](https://github.com/zcdanny/Homework9_Rakamin_Restfull_API_Middleware/assets/100658079/b91ab727-3ee7-4eab-974d-360a8ff3ff0c)
13. Akses masing2 endpoint 
13, pakai swagger nyaaaa
![image](https://github.com/zcdanny/Homework9_Rakamin_Restfull_API_Middleware/assets/100658079/2ff9342d-de92-4db6-9117-6c09b504782f)

![image](https://github.com/zcdanny/Homework9_Rakamin_Restfull_API_Middleware/assets/100658079/d45cb71a-fe2f-4979-b768-36b4a762613e)

upload ke repo masing-masing ya
