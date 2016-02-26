class TodoItem < ActiveRecord::Base

  def self.counts
    TodoItem.where(completed: true).count
  end
  
end
