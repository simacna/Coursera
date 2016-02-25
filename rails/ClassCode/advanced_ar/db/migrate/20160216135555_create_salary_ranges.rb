class CreateSalaryRanges < ActiveRecord::Migration
  def change
    create_table :salary_ranges do |t|
      t.float :min_salary
      t.float :max_salary
      #t.references :job means it'll have a job_id column in it referencing
      #the job table used to forma  1 to 1 relationship
      t.references :job, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
