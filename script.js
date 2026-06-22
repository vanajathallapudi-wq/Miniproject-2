db.appointments.insertMany([
{
patientId:1,
patientName:"Ramesh",
doctorName:"Dr. Kumar",
department:"Cardiology",
status:"Booked"
},
{
patientId:2,
patientName:"Sita",
doctorName:"Dr. Priya",
department:"Dermatology",
status:"Booked"
}
]);

db.appointments.find();

db.appointments.updateOne(
{patientId:2},
{$set:{status:"Completed"}}
);

db.appointments.find();

db.appointments.deleteOne({patientId:1});

db.appointments.find();