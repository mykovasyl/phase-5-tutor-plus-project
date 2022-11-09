class CreateTutorStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :tutor_students do |t|
      t.tutors :has_many
      t.students :has_many

      t.timestamps
    end
  end
end
