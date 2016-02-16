class Person < ActiveRecord::Base
  has_one :personal_info, dependent: :destroy
  has_one :salary_range
  has_many :jobs
  has_and_belongs_to_many :hobbies
  #class_name: 'Modelname'
  #want to be


end
