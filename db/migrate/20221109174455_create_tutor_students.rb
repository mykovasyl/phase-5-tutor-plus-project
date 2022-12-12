class CreateTutorStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :tutor_students do |t|
      t.references :tutor, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.string :notes
      t.timestamps
    end
  end
end
