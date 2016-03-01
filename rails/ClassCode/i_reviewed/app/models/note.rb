class Note < ActiveRecord::Base
  belongs_to :book
  has_many :reviewers
end
