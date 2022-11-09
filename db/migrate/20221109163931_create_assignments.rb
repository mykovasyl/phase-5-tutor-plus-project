class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :name
      t.string :notes
      t.boolean :completed

      t.timestamps
    end
  end
end
