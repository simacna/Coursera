# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


TodoItem.destroy_all
TodoList.destroy_all
Profile.destroy_all
User.destroy_all

people_list = [
  ["Carly","Fiorina",1954,"female","fff"],
  ["Donald","Trump",1946,"male","ttt"],
  ["Ben","Carson",1951,"male","ccc"],
  ["Hillary","Clinton",1954,"female","ccc"]
]

#i = 1
people_list.each do |first, last, birth, gender, pass|
  User.create!(username: last, password_digest: pass)
  #User.find(i).profiles.create!(first_name: first, last_name: last, birth_year: birth, gender: gender)
  #i++
end