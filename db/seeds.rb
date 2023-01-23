# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

faker_password = Faker::Internet.password
puts "Seeding..."
10.times do |i|
  User.create(
    username: Faker::Name.unique.name,
    password: faker_password,
    password_confirmation: faker_password,
    email: Faker::Internet.email,
    name: Faker::Name.name,
    grade: Faker::Number.between(from: 1, to: 12),
    type: "Student",
    # avatar: Faker::Placeholdit.image(size: '124x124')
  )
end
puts "Done!"
