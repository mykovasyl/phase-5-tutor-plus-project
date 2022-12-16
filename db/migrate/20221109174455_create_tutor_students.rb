class CreateTutorStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :tutor_students do |t|
      t.integer :student_id
      t.integer :tutor_id
    end
  end


  # def change
  #   create_table :tutor_students do |t|
  #     t.string :notes
  #     t.references :tutor_id, null: false #remove foreign
  #     t.references :student_id, null: false #remove foreign
  #     t.timestamps
  #   end
  #   add_foreign_key :tutor_students, :users, column: :tutor_id, primary_key: :email
  #   add_foreign_key :tutor_students, :users, column: :student_id, primary_key: :email
  # end
end
