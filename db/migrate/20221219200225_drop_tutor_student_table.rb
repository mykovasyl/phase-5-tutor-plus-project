class DropTutorStudentTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :tutor_students
  end
end
