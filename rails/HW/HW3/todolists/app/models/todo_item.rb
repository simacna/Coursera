class TodoItem < ActiveRecord::Base

  def self.counts
    @c =TodoItem.count
  end
end
